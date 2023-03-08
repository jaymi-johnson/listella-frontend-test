## Front-End Coding Test

Thanks for taking the time to try out our coding challenge. Since we don't do a lot of whiteboarding during the interview process we've found take-home problems to be the best way for you to show us your skills. This gives you the chance to think about the problem, solve it when you feel comfortable, and focus on the areas you think are important. This challenge should take you 3 - 4 hours on the keyboard, but we encourage you to read the problem description and take some time to think about your solution before you dive into it :)

### Overview

At Listella we deal with large amounts of image files associated with property listings. Each listing can have upwards of 100+ associated files and metadata. The ability to store and present these in near real-time over a web interface is extremely important.

The purpose of this is for the developer to demonstrate knowledge of the React and Typescript, their ability to work with APIs, and the ability to mimic designs.

The application should connect to the NASA API to get rover photos and metadata. (Link and Information provided in resource section)

### Scoring

<table>
  <tr>
   <td>Basics
   </td>
   <td>Does your application build? Does it read and write data in the way we'd like it to? Is it properly formatted?
   </td>
  </tr>
  <tr>
   <td>Completeness
   </td>
   <td>Do you handle all cases? What types of files and metadata are handled? Why were those chosen? Try to cover as much as you can
   </td>
  </tr>
  <tr>
   <td>Error Handling
   </td>
   <td>How are you handling edge cases? What happens when errors occur? What choices have you made to deal with potential error causes and states?
   </td>
  </tr>
  <tr>
   <td>Efficiency
   </td>
   <td>What limitations are placed on size or type? How have you optimized for large file handling?
   </td>
  </tr>
  <tr>
   <td>Maintainability
   </td>
   <td>In this case clean code is more important than efficient code because humans will have to read and review your code without an opportunity for
<p>
you to explain it. Inefficient code can often be improved if it is correct and highly maintainable
   </td>
  </tr>
  <tr>
   <td>Safety and Robustness
   </td>
   <td>How are you handling potentially unsafe access and data inputs? 
   </td>
  </tr>
</table>

Your solution will be scored using a combination of automated and manual scoring. Automated

scoring will be used to run your solution against a handful of sample inputs, comparing the

resulting output. If our automatic test suite passes, manual scoring will be used for everything

else. At Listella we care about clean, correct, safe, and efficient code.

### Requirements

- You are allowed to use other libraries to complete this project. The main requirement is to use NextJS and Typescript. .
- Incomplete solutions are accepted but the submitted application must compile and run.
- Mimic to the best of your ability to the Figma design in this repository
- Make request to NASAs API server side and not on the client
- Use a state management tool to store uploaded images
- Ability to upload images (up until the point of submitting a POST request)
- Ability to horizontally scroll multiple images
- Ability to view information of an image

### Resources

- (PDF of API)[[https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)]
- (NASAs API Website navigate to Mars Rover Photos)[[https://api.nasa.gov/index.html](https://api.nasa.gov/index.html)]
- (NextJS)[[https://nextjs.org/](https://nextjs.org/)]
- Figma designs [[https://www.figma.com/file/ascD0ddGr0Ax2EXo256qyJ/NASA?node-id=0%3A1&t=XZtItwkJ0G4eHYMc-1](https://www.figma.com/file/ascD0ddGr0Ax2EXo256qyJ/NASA?node-id=0%3A1&t=XZtItwkJ0G4eHYMc-1)] password: 123lizard
  Exported assets from the figma design file can be found inside of the assets folder.

### Submission

Please fork the following repository and complete a pull request or email us a link to your repository for submission. A README.md file should accompany the submission with detailed information on compilation and usage as well as any assumption made.
