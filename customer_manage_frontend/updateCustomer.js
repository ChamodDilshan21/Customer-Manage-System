function searchCustomerById() {
    event.preventDefault();
    fetch(`http://localhost:8080/customer/search-by-id/${document.getElementById("txtId").value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Wrap data into a array when customer object returned(when search by id)
            if (!Array.isArray(data)) {
                data = [data];
            }

            if (data.length != 0) {
                let customerTable = document.getElementById("tblCustomer");

                let tableRow = ``;
                data.forEach(customer => {
                    tableRow += `
                <tr>
                    <td>${customer.id}</td>
                    <td>${customer.name}</td>
                    <td>${customer.address}</td>
                    <td>${customer.salary}</td>
                </tr>
                `
                });

                customerTable.innerHTML = tableRow;

                document.getElementById("txtName").disabled = false;
                document.getElementById("txtAddress").disabled = false;
                document.getElementById("txtSalary").disabled = false;
            }
        })
}

function updateCustomer() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": document.getElementById("txtId").value,
        "name": document.getElementById("txtName").value,
        "address": document.getElementById("txtAddress").value,
        "salary": document.getElementById("txtSalary").value
    });

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/customer/update-customer", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}