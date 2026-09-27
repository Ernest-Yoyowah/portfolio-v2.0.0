export default function SspPlatform() {
  return (
    <>
      <h2>Why one platform</h2>

      <p>
        Separate portals made sense when each service launched, but together they cost everyone.
        Customers had to learn a different site for every task. Teams rebuilt the same buttons,
        forms and layouts again and again, and those copies slowly drifted apart. Every change to
        the brand or to shared behaviour had to be made several times over.
      </p>

      <p>
        A single monolithic app would have fixed the experience but tied every team to one
        codebase and one release train. Micro-frontends gave us both: one product for the
        customer, and independent ownership and deployment for the teams building it.
      </p>

      <h2>How it’s built</h2>

      <p>
        A Shell application hosts the platform and provides the common frame. Each domain, including
        the SSP Portal, eCommerce, SIM Swap and Business Hub, is its own React application, owned by
        its own team and deployed on its own schedule. Webpack Module Federation composes them at
        runtime, so to the customer it is one product.
      </p>

      <p>
        The rule that keeps it maintainable is simple: applications own their business logic, and
        the platform owns everything shared. That boundary is what lets teams move independently
        without the experience fragmenting again.
      </p>

      <h2>The design system</h2>

      <p>
        I designed and introduced MTN Ghana’s central design system to be the single source of
        truth for shared frontend work. It ships as an independently versioned package on GitHub
        Packages, and every application on the platform consumes it. It provides:
      </p>

      <ul>
        <li>Design tokens and theme management</li>
        <li>Reusable, accessible UI components</li>
        <li>Shared React hooks and utility functions</li>
        <li>A typed SVG icon library</li>
        <li>Global styling infrastructure</li>
      </ul>

      <p>
        Theming is built on layered design tokens exposed as CSS custom properties. Components only
        reference semantic tokens, so light and dark themes, and future brands, are a matter of
        swapping values rather than rewriting components.
      </p>

      <p>
        The package is built with tsup for clean tree shaking, is fully typed, and is designed to be
        shared safely under Module Federation, so applications don’t end up loading several copies
        of the same library.
      </p>

      <h2>Standards and tooling</h2>

      <p>
        Independent teams only stay consistent if the expectations are written down. I defined the
        project structure, coding conventions and architectural guidelines the applications are
        built against, and the build, test and release workflow behind the design system: GitHub
        Actions for CI, Changesets for versioning and changelogs, Vitest for tests and tsup for
        builds.
      </p>

      <p>
        I also wrote the platform’s architecture documentation, contribution guidelines, migration
        strategy and release process, so a new team can adopt the platform without needing someone
        to walk them through it.
      </p>

      <h2>My role</h2>

      <p>
        I lead the initiative and act as the technical decision-maker for the frontend platform:
        its architecture, code quality, how it evolves and when something is ready for production.
        A large part of the work is with product and engineering teams, making sure that many
        independently built applications still add up to one consistent product.
      </p>

      <h2>Outcome</h2>

      <p>
        Customers now have one place for MTN’s self-service products instead of a portal per
        service. Teams ship on their own schedules without rebuilding shared UI, duplicated work
        has dropped, features reach customers faster, and new applications start from a shared
        foundation instead of from scratch.
      </p>
    </>
  );
}
