import Image from "next/image"

const HarryPotter = () => {
  return (
    <div>
    <section className="w-8/12 mx-auto mt-4">
      <p>Harry Potter Pages using Static-Site Generation. Explore the navigation tabs to access the pages.</p>
      <p>Check the Network tab to see how the files are sent to the browser to render the pages.</p>
      <p>A more detailed explaination of the Static-Site Generation process will come soon to this page :)</p>
    </section>

    <section>
      <h2>Books path and components</h2>
      <p>We make the Books component become statically generated on build time using the getStaticProps to get all the props needed to be passed to the component</p>
      <Image
          src='/images/booksStatic.png'
          width={400}
          height={400}
          alt='Books component with getStaticProps'
      />
    </section>

    <section>
      <h2>Characters path and components</h2>
      <p>For the Characters page to become statically generated on build time, we do the same as with Books component and use the getStaticProps to get all the props needed to be passed to the component</p>
      <p>For the Character page, which is a Dynamic Route, there is something more to it.</p>
      <p>If we just use getStaticProps and pass the character data to the Character component and try to access the we will get an error:</p>
      <Image
          src='/images/getStaticPathsError.png'
          width={500}
          height={500}
          alt='Books component with getStaticProps'
      />
      <p>This is because for us to have Statically generated pages when having Dynamic routes we also need to use getStaticPaths so that NextJS knows which paths to generate at build time.</p>
    </section>
    </div>
  )
}
  
export default HarryPotter