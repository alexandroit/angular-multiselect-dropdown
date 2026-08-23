export function normalizeIdentifier(value: any) {
    var normalized = String(value).toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
    var start = 0;
    var end = normalized.length;

    while (start < end && normalized.charCodeAt(start) === 45) {
        start += 1;
    }
    while (end > start && normalized.charCodeAt(end - 1) === 45) {
        end -= 1;
    }

    return normalized.slice(start, end);
}
