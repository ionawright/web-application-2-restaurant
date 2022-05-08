const controller = require("../controllers/guestbookControllers");

describe('Test Routes ', () => {

    
    // it('should render the homepage route', () => {
    //     const req = {};
    //     const res = { render: jest.fn()}

    // });


    it('should render the /about route', () => {
        const req = {};
        const res = {
            status: 200,
            redirect: function(input) {
                this.text = input;
            },
        }
        controller.about_page(req, res);
        expect(res.text).toEqual(
            '' 
        );
    });

    // it('should render the not found route', () => {
        
    // });

    // it('should render the server error route', () => {
    //     const error = new Error('some error')

    // });
})