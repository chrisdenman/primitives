import {describe, expect, it} from '@jest/globals';
import Primitives from "../src/primitives";

describe("Primitives Tests", () => {

    const OBJECT_TYPE = {};

    const TYPE_IDENTIFIER__STRING = "string";
    const TYPE_IDENTIFIER__NUMBER = "number";
    const TYPE_IDENTIFIER__BIGINT = "bigint";
    const TYPE_IDENTIFIER__BOOLEAN = "boolean";
    const TYPE_IDENTIFIER__UNDEFINED = "undefined";
    const TYPE_IDENTIFIER__SYMBOL = "symbol";
    const TYPE_IDENTIFIER__NULL = "null";

    const TYPE_IDENTIFIERS = [
        TYPE_IDENTIFIER__STRING,
        TYPE_IDENTIFIER__NUMBER,
        TYPE_IDENTIFIER__BIGINT,
        TYPE_IDENTIFIER__BOOLEAN,
        TYPE_IDENTIFIER__UNDEFINED,
        TYPE_IDENTIFIER__SYMBOL,
    ];

    const TYPE_DETECTION_METHOD_NAME__STRING = "isString";
    const TYPE_DETECTION_METHOD_NAME__NUMBER = "isNumber";
    const TYPE_DETECTION_METHOD_NAME__BIGINT = "isBigint";
    const TYPE_DETECTION_METHOD_NAME__BOOLEAN = "isBoolean";
    const TYPE_DETECTION_METHOD_NAME__UNDEFINED = "isUndefined";
    const TYPE_DETECTION_METHOD_NAME__SYMBOL = "isSymbol";
    const TYPE_DETECTION_METHOD_NAME__NULL = "isNull";

    const PRIMITIVE_TYPE_DETECTION_METHOD_NAMES = [
        TYPE_DETECTION_METHOD_NAME__STRING,
        TYPE_DETECTION_METHOD_NAME__NUMBER,
        TYPE_DETECTION_METHOD_NAME__BIGINT,
        TYPE_DETECTION_METHOD_NAME__BOOLEAN,
        TYPE_DETECTION_METHOD_NAME__UNDEFINED,
        TYPE_DETECTION_METHOD_NAME__SYMBOL,
        TYPE_DETECTION_METHOD_NAME__NULL,
    ];

    const TYPE_IDENTIFIERS_TO_DETECTION_METHOD_NAME = new Map([
        [TYPE_IDENTIFIER__STRING, TYPE_DETECTION_METHOD_NAME__STRING],
        [TYPE_IDENTIFIER__NUMBER, TYPE_DETECTION_METHOD_NAME__NUMBER],
        [TYPE_IDENTIFIER__BIGINT, TYPE_DETECTION_METHOD_NAME__BIGINT],
        [TYPE_IDENTIFIER__BOOLEAN, TYPE_DETECTION_METHOD_NAME__BOOLEAN],
        [TYPE_IDENTIFIER__UNDEFINED, TYPE_DETECTION_METHOD_NAME__UNDEFINED],
        [TYPE_IDENTIFIER__SYMBOL, TYPE_DETECTION_METHOD_NAME__SYMBOL],
        [TYPE_IDENTIFIER__NULL, TYPE_DETECTION_METHOD_NAME__NULL],
    ]);

    const TYPE_SUBJECT_TO_TYPE_IDENTIFIER = new Map([
        ["", TYPE_IDENTIFIER__STRING],
        [0, TYPE_IDENTIFIER__NUMBER],
        [BigInt(0), TYPE_IDENTIFIER__BIGINT],
        [false, TYPE_IDENTIFIER__BOOLEAN],
        [undefined, TYPE_IDENTIFIER__UNDEFINED],
        [Symbol(), TYPE_IDENTIFIER__SYMBOL],
        [null, TYPE_IDENTIFIER__NULL],
    ]);

    const TYPE_IDENTIFIER_PROPERTY_NAME_TO_TYPE_IDENTIFIER = new Map([
        ["TYPE_IDENTIFIER__STRING", TYPE_IDENTIFIER__STRING],
        ["TYPE_IDENTIFIER__NUMBER", TYPE_IDENTIFIER__NUMBER],
        ["TYPE_IDENTIFIER__BIGINT", TYPE_IDENTIFIER__BIGINT],
        ["TYPE_IDENTIFIER__BOOLEAN", TYPE_IDENTIFIER__BOOLEAN],
        ["TYPE_IDENTIFIER__UNDEFINED", TYPE_IDENTIFIER__UNDEFINED],
        ["TYPE_IDENTIFIER__SYMBOL", TYPE_IDENTIFIER__SYMBOL],
    ]);

    TYPE_SUBJECT_TO_TYPE_IDENTIFIER.forEach((typeIdentifier, subject) => {
            it(
                `That ${typeIdentifier} values are reported as primitive`,
                () => expect(Primitives.isPrimitive(subject)).toBe(true)
            );

            const positiveDetectionMethodName = TYPE_IDENTIFIERS_TO_DETECTION_METHOD_NAME.get(typeIdentifier);
            PRIMITIVE_TYPE_DETECTION_METHOD_NAMES.forEach(
                (detectionMethodName) => {
                    const positiveTest = positiveDetectionMethodName === detectionMethodName;
                    const testTypeIdentifier = positiveTest === true ? "positively" : "negatively";
                    it(
                        `That ${typeIdentifier} values are ${testTypeIdentifier} identified by ${detectionMethodName}`,
                        () => expect(Primitives[detectionMethodName](subject)).toBe(positiveTest)
                    )
                }
            )

            if (typeIdentifier !== TYPE_IDENTIFIER__NULL) {
                TYPE_IDENTIFIERS.forEach(
                    (primitiveTypeIdentifier) => {
                        const isPositiveTest = typeIdentifier === primitiveTypeIdentifier;
                        const testTypeIdentifier = isPositiveTest === true ? "positively" : "negatively";
                        it(
                            `That ${typeIdentifier} values are ${testTypeIdentifier} identified by 
                            isTypeOf(..., "${primitiveTypeIdentifier}")`,
                            () => expect(Primitives.isTypeOf(subject, primitiveTypeIdentifier)).toBe(isPositiveTest)
                        )
                    }
                )
            }
        }
    );

    PRIMITIVE_TYPE_DETECTION_METHOD_NAMES.forEach((detectionMethodName) => {
        it(
            `That ${detectionMethodName} reports object types as non-primitive`,
            () => expect(Primitives[detectionMethodName](OBJECT_TYPE)).toBe(false)
        )
    })

    it(
        `That isPrimitive reports object types as non-primitive`,
        () => expect(Primitives.isPrimitive(OBJECT_TYPE)).toBe(false)
    );

    TYPE_IDENTIFIER_PROPERTY_NAME_TO_TYPE_IDENTIFIER.forEach((expectedValue, propertyName) =>
        it(
            `That Primitives.${propertyName} return ${expectedValue}`,
            () => expect(Primitives[propertyName]).toBe(expectedValue)
        )
    );
});