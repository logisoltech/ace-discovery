"use client";

function FormField({ id, label, type = "text", required = false, textarea = false }) {
  const inputClasses =
    "w-full bg-white/5 border border-white/15 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#1d6fff] focus:bg-white/10 transition-colors";
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-white text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[#1d6fff]">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5h-3v12h3v-12zm-1.5-5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zm15.5 17v-6.4c0-3.4-1.8-5-4.2-5-1.9 0-2.8 1.1-3.3 1.9V8.5h-3v12h3v-6.6c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.7v6.4h3.2z" />
    </svg>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <a
          href="tel:+14695923100"
          className="block text-white text-base md:text-lg font-medium hover:text-[#1d6fff] transition-colors"
        >
          (469) 592-3100
        </a>
        <a
          href="mailto:support@acediscovery.com"
          className="block text-white text-base md:text-lg font-medium hover:text-[#1d6fff] transition-colors mt-1"
        >
          support@acediscovery.com
        </a>
      </div>

      <address className="not-italic text-white/75 text-sm leading-relaxed">
        3400 N Central Expressway,
        <br />
        Suite 110-213
        <br />
        Richardson, TX 75080
      </address>

      <a
        href="#"
        aria-label="LinkedIn"
        className="inline-flex w-10 h-10 rounded-full bg-[#1d6fff] hover:bg-[#0d5fef] text-white items-center justify-center transition-colors"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24">
        <h1 className="text-white font-extrabold text-center uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s <span className="text-[#1d6fff]">Connect</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mt-12 md:mt-16">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
          >
            <FormField id="firstName" label="First Name" required />
            <FormField id="lastName" label="Last Name" required />
            <FormField id="email" label="Email Address" type="email" required />
            <FormField id="phone" label="Phone" type="tel" />
            <div className="sm:col-span-2">
              <FormField id="company" label="Company Name" />
            </div>
            <div className="sm:col-span-2">
              <FormField id="comments" label="Comments" textarea />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                className="bg-[#1d6fff] hover:bg-[#0d5fef] transition-colors text-white text-sm font-semibold tracking-wide uppercase px-10 py-3 rounded-md shadow-lg shadow-blue-900/30"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="md:col-span-5 lg:col-span-4">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
