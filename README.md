
<h1>My Developer Portfolio</h1>
This is my personal website to display my latest projects, skills, and means of contact. I designed it from scratch and kept things simple and responsive so it looks slick on phones, desktops, and everything in between.

<h2>How It's Made</h2>
<b>Tech used:</b> HTML, CSS, JavaScript, NextJS, Netlify</br>
I'm a big fan of ReactJS, once you've got a grip on a few important hooks you can do so many things so quickly. That coupled with components makes it incredibly capable for building out big and small web applications and keeping them maintained. I wanted those perks of React, but for making a static site it was a bit overkill, which is why I opted to use NextJS. Since Next supports server side rendering with statically generated HTML, it was the perfect choice for creating my simple portfolio. The other perk was the fact that Next is fully supported by Netlify, so hosting my site would be dead simple.

I took my time and built out each piece of my site as a component and added styling with CSS modules. I've become a big fan of CSS modules since they keep all styling separate and there's no need to worry about repeating a classname and having to worry about accidentally overriding styles.

<h2>Lessons Learned</h2>
I wanted the navigation component to update its styling depending on what section a user is on. Initially I kept this very basic and updated state depending on what nav item was clicked, but I quickly realized this wasn't a flawless solution as page scroll would leave the active nav item incorrect.
To correct this issue I used the useEffect hook and the Intersection Observer API along with useRef to update the page state. With this dynamically updated page state I added ternary operators to each nav item to update to the relevant active or inactive class thus providing an elegant navigation indicator with the addition of pseudo elements. 
Another addition I made to the navigation component was keeping its location at the bottom of the viewport for smaller, handheld devices. This solves the issue of the nav element looking out of place on mobile devices and allows users to more easily navigate without having to reach to the top of the screen.

Since I use Netlify to host my site, I took advantage of their built in form handling which made adding form functionality super simple. All I had to do was add an extra input and a data attribute to my form element. One aspect of the default form handling I wasn't a fan of was my page redirecting after submission. To get around this I instead handled form submission via AJAX following Netlify's docs. This worked out great as in addition to preventing page refreshes and redirects, I could update state to trigger CSS classes and let users know if their submission was received or not. It always pays to check the docs.