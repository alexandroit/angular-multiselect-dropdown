const unsafeObjectKeys: { [key: string]: boolean } = Object.create(null);

['__proto__', 'prototype', 'constructor'].forEach((key) => {
    unsafeObjectKeys[key] = true;
});

export function isUnsafeObjectKey(key: string): boolean {
    return unsafeObjectKeys[key] === true;
}

export function safeObjectAssign<T extends object>(target: T, ...sources: any[]): T {
    sources.forEach((source) => {
        if (source === null || source === undefined) {
            return;
        }

        Object.keys(Object(source)).forEach((key) => {
            if (isUnsafeObjectKey(key)) {
                return;
            }

            Object.defineProperty(target, key, {
                configurable: true,
                enumerable: true,
                value: source[key],
                writable: true
            });
        });
    });

    return target;
}
