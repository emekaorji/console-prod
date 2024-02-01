if (typeof window !== 'undefined')
	window.console =
		process.env.NODE_ENV === 'production'
			? ({
					assert() {},
					clear() {},
					Console: window.console.Console,
					count() {},
					countReset() {},
					debug() {},
					dir() {},
					dirxml() {},
					error() {},
					group() {},
					groupCollapsed() {},
					groupEnd() {},
					info() {},
					log() {},
					profile() {},
					profileEnd() {},
					table() {},
					time() {},
					timeEnd() {},
					timeLog() {},
					timeStamp() {},
					trace() {},
					warn() {},
			  } satisfies Console)
			: console;
