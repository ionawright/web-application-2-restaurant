const controller = require("./controllers/controller");

describe('Test Routes ', () => {
    
    it('should render the about page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.about_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('about');
    });

    it('should render the contact page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.contact_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('contact');
    });

    it('should render the news page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.news_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('news');
    });

    // it('should respond to menu-lunch page', async () => {
    //     const req = {};
    //     const res = { 
    //         render: jest.fn()}
    //     controller.lunch_page(req, res);
    //     expect(res.render.mock.calls.length).toBe(1);
    //     expect(res.render.mock.calls[0][0]).toBe('menu-lunch');
    // });

    // it('should render the menu-dinner page route', () => {
    //     const req = {};
    //     const res = { render: jest.fn()}
    //     controller.dinner_page(req, res);
    //     expect(res.render.mock.calls.length).toBe(1);
    //     expect(res.render.mock.calls[0][0]).toBe('menu-dinner');
    // });

    it('should render the register page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.show_register_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('register');
    });


    it('should render the login page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.login_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('login');
    });


    // it('should render the admin page route', () => {
    //     const req = {};
    //     const res = { render: jest.fn()}
    //     controller.admin_page(req, res);
    //     expect(res.render.mock.calls.length).toBe(1);
    //     expect(res.render.mock.calls[0][0]).toBe('admin');
    // });


    it('should render the add dish page route', () => {
        const req = {};
        const res = { render: jest.fn()}
        controller.add_dish_page(req, res);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.render.mock.calls[0][0]).toBe('add-dish');
    });


    // it('should render the edit dish page route', () => {
    //     const req = {};
    //     const res = { render: jest.fn()}
    //     controller.edit_dish_page(req, res);
    //     expect(res.render.mock.calls.length).toBe(1);
    //     expect(res.render.mock.calls[0][0]).toBe('edit-dish');
    // });

    it('should render 404 not found', () => {
        const req = {};
        const res = { status: jest.fn(), type: jest.fn(), send: jest.fn()}
        controller.notFound(req, res);
        expect(res.status.mock.calls[0][0]).toBe(404);
        expect(res.type.mock.calls[0][0]).toBe("text/plain");
        expect(res.send.mock.calls[0][0]).toBe("404 Not Found.");
    });

    it('should render 500 server error', () => {
        const err = new Error("Error")
        const req = {};
        const res = { status: jest.fn(), type: jest.fn(), send: jest.fn()}
        const next = jest.fn();
        controller.serverError(req, res);
        expect(res.status.mock.calls[0][0]).toBe(500);
        expect(res.type.mock.calls[0][0]).toBe("text/plain");
        expect(res.send.mock.calls[0][0]).toBe("Internal Server Error.");
    });
});