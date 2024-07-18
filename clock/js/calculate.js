const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const now = new Date().getFullYear();
    const time = document.getElementById("date").value;
    const time1 = new Date(time).getFullYear();
    const age = now - time1;

    // new Noty({
    //     text: `سن شما: ${age} سال`,
    //     type: 'info',
    //     layout: 'topRight',
    //     timeout: 3000
    // }).show();

    Swal.fire({
        title: 'محاسبه سن',
        text: `سن شما: ${age} سال`,
        icon: 'info',
        confirmButtonText: 'باشه'
    });

});
