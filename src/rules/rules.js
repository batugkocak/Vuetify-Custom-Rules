export default {
    /**
     * Rule validate required
     * @param {any} v the given value to validate
     * @param {string} label
     * @returns validate
     */
    ruleRequired: (v, label = null) => {
      return !!v || `The ${label ?? 'field'} is required`;
    },
    /**
     * Rule validate min length
     * @param {any} v the given value to validate
     * @param {number} length min length to check
     * @param {string} label
     * @returns validate
     */
    ruleMinLength: (v, length, label = null) => {
      return (
        String(v).length >= length ||
        `The ${label ?? 'field'} minimum characters is ${length}`
      );
    },
    /**
     * Rule validate max length
     * @param {any} v the given value to validate
     * @param {number} length max length to check
     * @param {string} label
     * @returns validate
     */
    ruleMaxLength: (v, length, label = null) => {
      return (
        String(v).length <= length ||
        `The ${label ?? 'field'} maximum characters is ${length}`
      );
    },
};