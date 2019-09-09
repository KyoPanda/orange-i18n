const Window_Base = typeof window !== 'undefined' ? window.Window_Base : function () {};

export default class extends Window_Base {

	sayHello() {
		return 'Hello';
	}
}