---
title: Modular Code - Iterating the Frontend Architecture for Aimly’s Event Creation Feature
datePublished: "2023-10-06"
section: works
category: dev - aimly
excerpt: placeholder...
coverImage: https://user-images.githubusercontent.com/77861258/235372607-f5b674ef-95f6-4acb-8e49-6dcf33cc3778.jpg
link: https://www.goaimly.com/create-new-event/
worksTeamSize: 3
worksRoles: ["Frontend Engineer"]
worksDuration: ["07.22", "06.23"]
worksTools: ["NextJS", "Typescript", "Redux", "Material UI", "Jest", "Cypress"]
---

Ever since I began creating web applications in 2021, I’ve had an inclination to create what I understand as ‘modular code’: code that practices the separation of concerns, whether it be functions, components, or otherwise. However, it was only when time (and money) became a part of the equation that I began to truly understand its magnitude of importance.

My first and long lasting experiences with modular design was through leading the frontend development of Aimly’s Event Creation feature. As a virtual fundraising platform, it was imperative that Aimly prioritized and refined its Event Creation flow, which guides the user through several steps to help them create their own fundraising event.

_(GIF of Aimly Event Creation flow as it currently stands, fast speed)_

From user flows with complex conditional logic to form validation and data persistence, it comes as no surprise that the feature saw several major iterations over time. And with each iteration I found myself discovering new patterns and finding opportunities for modularity, all of which benefitted both the business and its engineering team in the long run.

Before we continue, a few notes:

<br/>

- Although I have been intimately involved with the development of this feature (form validation, Cypress tests, data and form step persistence, styling), this article will be strictly focusing on the approach to modularity as it pertains to growing complexity in Event Creation steps and user flows.
- Code snippets have been edited to simplify the reading experience and to respect Aimly’s more sensitive business logic.

<br/>

With all of that now said, let’s jump right into it.

## Creating the MVP Feature

As soon I was onboarded into the engineering team in the fall of 2022, my first task was to implement the Event Creation MVP on the frontend. During this time the user flow and wireframes were simple and straightforward:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/865d8f66-c033-44ff-92a0-44381b66bd53"
    alt="Hodl the Throdl Demo Image" 
    aspectRatio="300:73"
/>

<br/>

This informed my decision to implement a simple yet dynamic approach where the steps involved in the Event Creation were conditionally rendered based on the step the user was currently in:

<code>
export const getFormStepDict = (componentProps?: IFormStepProps) => {
  return {
    1: {
      step: 1,
      title: "fundraiserType",
      formFields: "fundraiserType",
      component:
        componentProps &&
        FundraiserType({ ...(componentProps as IFormStepProps) }),
    },
    2: {
      step: 2,
      title: "enterEventCode",
      formFields: undefined,
      component:
        componentProps &&
        EnterEventCode({ ...(componentProps as IFormStepProps) }),
    },
		// ...
    6: {
      step: 6,
      title: "contactNameAndNumber",
      formFields: ["firstName", "lastName", "phone"],
      component:
        componentProps &&
        ContactNameAndNumber({
          ...(componentProps as IFormStepProps),
        }),
    },
    // etc...
  };
};
</code>

Note: At this time I didn’t take into consideration of how this particular feature could scale over time. Upon revisiting the evolution of this feature, I realize that I should have probed both the project manager and UX designer to gauge future possibilities and edge cases. Regardless, I think that the feature matured fairly well, as we will see later in this article.

## Utilizing Shared Components

In spring of 2023, Aimly’s UX Lead had proposed a considerable change to the Event Creation flow, where the then three form steps were split into nine:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/ba9dded9-e6c5-4f8e-a79d-f6414d65cbe5"
    alt="Hodl the Throdl Demo Image" 
    aspectRatio="500:151"
/>

<br/>

As we were using Material UI as our primary means of styling, I was inevitably inspired to consolidate a modest chunk of code into shared components. Below are a few examples:

_(image with screenshot of component that outlines parts of shared components)_

_(code snippet)_

In addition, I abstracted the logic for rendering a given form step into its own dedicated component. Doing so reduced the Event Creation page file’s lines of code significantly, all the while remaining straightforward for the engineering team:

_(code snippet)_

This refactoring effort did not require considerable investment of time and proved to pay off dividends, most notably for this next major iteration.

## Complex User Flows

Come Summer of 2023, Aimly began to rollout their ‘Join a Team’ initiative, where a user could not only create an event, but also invite team members to create events and have a goal that the entire team would all connect to (you can view an example [here](https://goaimly.com/example-store)). This new approach to Event Creation required both new and current steps to only display given certain user flows:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/b2c5cc8c-dc79-4e27-9721-7d358580b6e4"
    alt="Hodl the Throdl Demo Image" 
    aspectRatio="300:181"
/>

<br/>

Although traversal between steps such as skips was relatively easy to implement (via the use of query params), the effort had a high likelihood of convoluting the codebase. Most if not all steps required validation, and the metadata pertaining to each step was required for both analytics and rendering.

To consolidate the metadata and make the steps more modular for these requirements, I expanded off the concept of the DynamicFormStep component through the creation of a dictionary to store all form steps:

_(code snippet)_

From validating the form fields of each step to automatically navigating the user to the last step they last visited via page reload, this modular approach proved to be dynamic and malleable across various applications.

---

_(summary)_
