loadCustomer();

function loadCustomer(){
    fetch("http://localhost:8080/customer/get-all")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);

        let customerTable = document.getElementById("tblCustomer");

        let tableRow=``;
        data.forEach(customer => {
            tableRow+= `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
            `
        });

        customerTable.innerHTML+=tableRow;
    })
}
