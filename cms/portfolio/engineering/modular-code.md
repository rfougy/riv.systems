---
title: Modular Code - Iterating the Frontend Architecture for Aimly’s Event Creation Feature
datePublished: "2023-10-06"
section: portfolio
category: engineering
excerpt: How I evolved an evergrowing feature through abstraction and foresight.
coverImage: https://github.com/rfougy/riv.systems/assets/77861258/7da956d0-5b8b-42b3-9769-56a5a7d12dd7
link: https://www.goaimly.com/create-new-event/
worksTeamSize: 3
worksRoles: ["Frontend Engineer"]
worksDuration: ["07.22", "06.23"]
worksTools: ["NextJS", "Typescript", "Redux", "Material UI", "Jest", "Cypress"]
---

Ever since I began creating web applications in 2021, I’ve had an inclination to create what I understand as ‘modular code’: code that practices the separation of concerns, whether it be functions, components, or otherwise. However, it was only when time (and money) became a part of the equation that I truly began to understand its magnitude of importance.

My first and long lasting experiences with modular design was through leading the frontend development of [Aimly’s Event Creation feature](https://www.goaimly.com/create-new-event?page=1). As a virtual fundraising platform, it was imperative that Aimly prioritized and refined its Event Creation flow, which <mark>guides the user through several steps to help them create their own fundraising event</mark>.

<br/>
<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/5cc9fc24-4e52-4797-9ff2-e4bac18f6566"
    alt="Event Creation GIF" 
    aspectRatio="600:323"
/>

<br/>
<br/>

From user flows with complex conditional logic to form validation and data persistence, it comes as no surprise that <mark>the feature saw several major iterations over time</mark>. And with each iteration <mark>I found myself discovering new patterns and finding opportunities for modularity</mark>, all of which benefitted both the business and its engineering team in the long run.

Before we continue, a few notes:

<br/>

- Although I have been intimately involved with the development of this feature (form validation, Cypress tests, data and form step persistence, styling), this article will be strictly focusing on the approach to modularity as it pertains to the growing complexity in Event Creation steps and user flows.
- Code snippets have been edited to simplify the reading experience and to respect Aimly’s more sensitive business logic.

<br/>

With all of that said, let’s jump right into it.

## Creating the MVP Feature

As soon as I was onboarded into the engineering team in the summer of 2022, <mark>my first task was to implement the Event Creation MVP on the frontend</mark>. During this time the user flow and wireframes were simple and straightforward:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/865d8f66-c033-44ff-92a0-44381b66bd53"
    alt="Initial Event Creation User Chart" 
    aspectRatio="300:73"
/>

<br/>

This informed my decision to implement a simple yet dynamic approach where the steps involved in the Event Creation were <mark>conditionally rendered based on the step the user was in</mark>:

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/51f33f31-fe05-433d-adeb-340c7bd7bb38"
    alt="code snippet of CreateNewEvent.tsx" 
    aspectRatio="909:1969"
/>

Note: At this time I didn’t take into consideration of how this particular feature could scale over time. Upon revisiting the evolution of this feature, I realize that I should have probed both the project manager and UX designer to gauge future possibilities and edge cases. Regardless, I believe that the feature matured fairly well, as we will see later in this article.

## Utilizing Shared Components

In spring of 2023, Aimly’s UX Lead had proposed a considerable change to the Event Creation flow, where <mark>the then three form steps were split into nine</mark>:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/ba9dded9-e6c5-4f8e-a79d-f6414d65cbe5"
    alt="Updated Event Creation User Flow Chart" 
    aspectRatio="500:151"
/>

<br/>

As we were using Material UI as our primary means of styling, I was inevitably inspired to <mark>consolidate a modest chunk of code into shared components</mark>. Below are a few examples:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/132c6df3-db1c-47ae-9ef6-f18c345dedbc"
    alt="visual breakdown of shared components for event creation form step" 
    aspectRatio="444:295"
/>

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/0d61c2b7-d14c-491d-9c88-f44cb64daf76"
    alt="code snippet of FormContainer.tsx" 
    aspectRatio="871:1096"
/>
<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/f1bd6e3e-c514-42b4-8d5c-4a131c5fec19"
    alt="code snippet of FormHeader.tsx" 
    aspectRatio="871:1387"
/>

In addition, I abstracted the logic for rendering a given form step into its own dedicated component. Doing so <mark>reduced the Event Creation page file’s lines of code significantly, all the while remaining straightforward for the engineering team</mark>:

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/243c78f3-573d-45b7-8def-eabfcac1005d"
    alt="code snippet of DynamicFormStep.tsx" 
    aspectRatio="928:849"
/>

This refactoring effort did not require considerable investment of time and proved to pay off dividends, most notably for this next major iteration.

## Complex User Flows

Come summer of 2023, Aimly began to rollout their <mark>‘Join a Team’ initiative</mark>, where a user could not only create an event, but also invite team members to create events and have a goal that the entire team would all connect to (you can view an example [here](https://goaimly.com/example-store)). This new approach to Event Creation <mark>required both new and current steps to only display given certain user flows</mark>:

<br/>

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/b2c5cc8c-dc79-4e27-9721-7d358580b6e4"
    alt="Event Creation User Flow Updates via Join a Team Initiative" 
    aspectRatio="300:181"
/>

<br/>

Although traversal between steps such as skips was relatively easy to implement (via the use of query params), the effort had a high likelihood of convoluting the codebase. Most if not all steps required validation, and the metadata pertaining to each step was required for both analytics and rendering.

To consolidate the metadata and make the steps more modular for these requirements, I expanded off the concept of the DynamicFormStep component through <mark>the creation of a dictionary to store all form steps</mark>:

<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/e736e27c-b5ff-4e7e-bb97-b9e3dceeb14f"
    alt="code snippet of getFormStepDict.ts" 
    aspectRatio="145:164"
/>
<Image
    src="https://github.com/rfougy/riv.systems/assets/77861258/8e6536c7-dda3-4b5d-aae5-c7450d218c2f"
    alt="code snippet of DynamicFormStep.tsx" 
    aspectRatio="435:223"
/>

From validating the form fields of each step to automatically navigating the user to the last step they last visited via page reload, <mark>this modular approach proved to be dynamic and malleable across various applications</mark>.
