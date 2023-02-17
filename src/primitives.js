export default class Primitives {

    /**
     * The resultant value of the <code>typeof</code> operator for string typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__STRING() {
        return TYPE_IDENTIFIER__STRING;
    }

    /**
     * The resultant value of the <code>typeof</code> operator for number typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__NUMBER() {
        return TYPE_IDENTIFIER__NUMBER;
    }

    /**
     * The resultant value of the <code>typeof</code> operator for bigint typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__BIGINT() {
        return TYPE_IDENTIFIER__BIGINT;
    }

    /**
     * The resultant value of the <code>typeof</code> operator for boolean typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__BOOLEAN() {
        return TYPE_IDENTIFIER__BOOLEAN;
    }

    /**
     * The resultant value of the <code>typeof</code> operator for undefined typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__UNDEFINED() {
        return TYPE_IDENTIFIER__UNDEFINED;
    }

    /**
     * The resultant value of the <code>typeof</code> operator for symbol typed values.
     *
     * @return {string}
     */
    static get TYPE_IDENTIFIER__SYMBOL() {
        return TYPE_IDENTIFIER__SYMBOL;
    }

    /**
     * Strictly tests 'subject' using the <code>typeof</code> operator to determine if it has the type given by
     * 'typeIdentifier'.
     *
     * <strong>Not for use on <code>null</code> values (JS incorrectly reports 'null' values as <code>object</code>
     * using the <code>typeof</code> operator).</strong>
     *
     * @param {string|number|bigint|boolean|undefined|symbol} subject - the value to test
     * @param {string} typeIdentifier - the datatype to test 'subject' for (one of the
     * <code>Primitives.TYPE_IDENTIFIER__X</code> constants typically)
     *
     * @return {boolean} <code>true</code> if <code>typeof subject === typeIdentifier</code>, false otherwise
     */
    static isTypeOf(subject, typeIdentifier) {
        return typeof subject === typeIdentifier;
    }

    /**
     * Tests if 'subject' is a primitive datatype.
     *
     * @param {*} subject - the value to test
     * @return {boolean} - <code>true</code> if 'subject' is a value of a primitive datatype, <code>false</code>
     * otherwise
     */
    static isPrimitive(subject) {
        return this.isString(subject) ||
            this.isNumber(subject) ||
            this.isBigint(subject) ||
            this.isBoolean(subject) ||
            this.isUndefined(subject) ||
            this.isSymbol(subject) ||
            this.isNull(subject);
    }

    /**
     * Tests if 'subject' is a value of the string datatype.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is a <code>string</code>, <code>false</code> otherwise
     */
    static isString(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__STRING);
    }

    /**
     * Tests if 'subject' is a value of the number datatype.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is a <code>number</code>, <code>false</code> otherwise
     */
    static isNumber(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__NUMBER);
    }

    /**
     * Tests if 'subject' is a value is a bigint.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is a <code>bigint</code>, <code>false</code> otherwise
     */
    static isBigint(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__BIGINT);
    }

    /**
     * Tests if 'subject' is a value of the boolean datatype.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is a <code>boolean</code>, <code>false</code> otherwise
     */
    static isBoolean(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__BOOLEAN);
    }

    /**
     * Tests if 'subject' is undefined.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is <code>undefined</code>, <code>false</code> otherwise
     */
    static isUndefined(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__UNDEFINED);
    }

    /**
     * Tests if 'subject' is a value of the Symbol datatype.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is a <code>Symbol</code>, <code>false</code> otherwise
     */
    static isSymbol(subject) {
        return Primitives.isTypeOf(subject, Primitives.TYPE_IDENTIFIER__SYMBOL);
    }

    /**
     * Tests if 'subject' is <code>null</code>.
     *
     * @param {*} subject - the value to test
     *
     * @return {boolean} <code>true</code> if 'subject' is <code>null</code>, <code>false</code> otherwise
     */
    static isNull(subject) {
        return subject === null;
    }
}

const TYPE_IDENTIFIER__STRING = "string";
const TYPE_IDENTIFIER__NUMBER = "number";
const TYPE_IDENTIFIER__BIGINT = "bigint";
const TYPE_IDENTIFIER__BOOLEAN = "boolean";
const TYPE_IDENTIFIER__UNDEFINED = "undefined";
const TYPE_IDENTIFIER__SYMBOL = "symbol";
