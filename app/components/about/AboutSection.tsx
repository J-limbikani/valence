// components/AboutSection.js
const AboutSection = () => {
  return (
    <section
      style={{
        padding: '30px', // Reduced padding to make the section more compact
        maxWidth: '1000px', // Keep the maximum width to prevent the content from being too wide
        margin: '0 auto', // Centers the content
        backgroundColor: 'inherit', // Inherit background color from root
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Adds a subtle shadow for depth
        borderRadius: '8px', // Rounded corners
        color: '#fff', // Set text color to white for all text
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#fff' }}>About Us</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        Valence is an end-to-end solar energy company, that is centered transportation, distribution and providing innovative and reliable solar and electrical energy solutions to homeowners, businesses, and organizations in Zimbabwe. Our goal is simple: make clean, renewable energy accessible, affordable, and sustainable for everyone.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>Our Mission & Values</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#fff' }}>
        <li style={{ margin: '8px 0' }}>
          <strong>Sustainability:</strong> We prioritize eco-friendly solutions and practices.
        </li>
        <li style={{ margin: '8px 0' }}>
          <strong>Innovation:</strong> We stay at the forefront of renewable energy technology.
        </li>
        <li style={{ margin: '8px 0' }}>
          <strong>Integrity:</strong> We are committed to transparency, honesty, and excellence in everything we do.
        </li>
        <li style={{ margin: '8px 0' }}>
          <strong>Customer-Centric:</strong> Our customers are our top priority. We work tirelessly to exceed their expectations.
        </li>
      </ul>

      <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>Why Choose Us?</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        For years of experience, valence has installed a lot of solar solar systems, 
        helping businesses and homeowners reduce their electricity bills while making a positive 
        environmental impact. Our team consists of certified professionals who are passionate about 
        bringing the benefits of solar energy to every client.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>Our Team</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        Behind every solar panel installation is a team of dedicated professionals who care about your energy future. 
        From our certified installers to our customer service team, we work together to ensure your experience with us 
        is seamless and rewarding. We&rsquo;re not just installing solar panels; we&rsquo;re installing peace of mind.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>Sustainability Commitment</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        At Valence energy solutions, sustainability is at the heart of what we do. We not only focus on reducing 
        our clients&rsquo; carbon footprints, but we also take great care to minimize our own environmental impact. 
        We use only the most efficient, long-lasting materials in our installations and ensure that our business 
        practices are in line with the highest standards of environmental responsibility.
      </p>

      <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#fff' }}>Let&rsquo;s Go Solar Together</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#fff' }}>
        Ready to make the switch to solar energy? Whether you&rsquo;re looking to lower your energy bills, 
        increase your home&rsquo;s value, or reduce your carbon footprint, we&rsquo;re here to help. 
        Contact us today to schedule a free consultation and start your journey toward a more sustainable future.
      </p>
    </section>
  );
};

export default AboutSection;
