// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const WEB_SERVICES = [
  "Business applications",
  "Customer portals",
  "SaaS platforms",
  "Enterprise systems",
  "E-commerce solutions",
  "Internal business tools",
];

const MOBILE_SERVICES = [
  "Cross-platform applications",
  "Native mobile apps",
  "Consumer apps",
  "Business applications",
  "Mobile dashboards",
  "Connected device applications",
];

const Services = () => {
  return (
    <section>
      <div>
        <h2>Our Services</h2>
        <h3>Custom Web Development</h3>
        <p>
          Build fast, secure, and scalable web applications tailored to your
          business goals using modern technologies and best practices.
        </p>
        <h4>We develop:</h4>
        <ul>
          {WEB_SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <h3>Mobile App Development</h3>
        <p>
          Create intuitive, high-performance mobile applications for iOS and
          Android that deliver exceptional user experiences.
        </p>
        <h4>We develop:</h4>
        <ul>
          {MOBILE_SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
