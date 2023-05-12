/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // Allow `autocomplete="nope"` on form elements,
            // a workaround to disable autofill in Chrome.
            // @link https://bugs.chromium.org/p/chromium/issues/detail?id=468153
            id: "autocomplete-valid",
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // @fixme Color contrast of subdued text fails, as raised in issue #123.
            id: "color-contrast",
            reviewOnFail: true,
          },
        ],
      },
    },
  },
};

export default preview;
