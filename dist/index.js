if (typeof window !== 'undefined') {
    const prodConsoleObject = {
        assert() { },
        clear() { },
        Console: window.console.Console,
        count() { },
        countReset() { },
        debug() { },
        dir() { },
        dirxml() { },
        error() { },
        group() { },
        groupCollapsed() { },
        groupEnd() { },
        info() { },
        log() { },
        prod: window.console,
        profile() { },
        profileEnd() { },
        table() { },
        time() { },
        timeEnd() { },
        timeLog() { },
        timeStamp() { },
        trace() { },
        warn() { },
    };
    const consoleObject = Object.assign(Object.assign({}, console), { prod: window.console });
    window.console =
        process.env.NODE_ENV === 'production' ? prodConsoleObject : consoleObject;
}
else {
    const newConsoleObject = Object.assign(Object.assign({}, console), { prod: console });
    console = newConsoleObject;
}
