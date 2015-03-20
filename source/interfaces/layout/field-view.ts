module formsjs {

  /**
   * Describes additional view
   */
  export interface FieldView {

    /**
     * Attribute name within form data object (e.g. "username" within <code>{username: "John Doe"}</code>).
     * This is a convenience attribute added by Forms JS based on the map key in {@link ViewSchema}.
     * @private
     */
    key_:string;

    /**
     * Input type used by this field; defaults to InputType.TEXT.
     */
    inputType?:InputType;

    /**
     * Optional help text providing additional context to users.
     */
    help?:string;

    /**
     * Field <label>; defaults to humanized form of attribute name (e.g. "firstName" becomes "First Name").
     */
    label?:string;

    /**
     * Placeholder text shown when field is empty.
     */
    placeholder?:string;

    /**
     * This field should be read-only, not editable.
     */
    readOnly?:boolean;
  }
}