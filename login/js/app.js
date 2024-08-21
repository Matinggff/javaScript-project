

class Auth {
    constructor(form) {
        this.form = form;
        this.addEventListener();
    }

    addEventListener() {
        this.form.addEventListener("submit", (e)=> {
            e.preventDefault();
            this.login(e);
        })
    }

    async login(e) {
        const user = {
            "email": String(e.target.email.value),
            "password": String(e.target.password.value)

        };
        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                this.form.reset();
                function showSuccess() {
                    toastr.success('Login Successfully', 'Success', {
                        positionClass: 'toast-bottom-center',
                        timeOut: 3000,
                        closeButton: true,
                        progressBar: true
                    });
                }
                showSuccess()
            }else {
                this.form.reset();
                function showError() {
                    toastr.error('Invalid Data', 'Error', {
                        positionClass: 'toast-bottom-center',
                        timeOut: 3000,
                        closeButton: true,
                        progressBar: true
                    });
                }
                showError();
            }
        } catch (error) {
            function catchError() {
                toastr.error(`${error}`, 'Error', {
                    positionClass: 'toast-bottom-center',
                    timeOut: 3000,
                    closeButton: true,
                    progressBar: true
                });
            }
        }
        

    }
}

const form = document.getElementById("form");
new Auth(form)