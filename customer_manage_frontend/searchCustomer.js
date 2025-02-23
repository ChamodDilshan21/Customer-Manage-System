document.getElementById("searchBy").addEventListener("change", function () {
    let searchField = document.getElementById("searchField");

    switch (this.value) {
        case "name":
            searchField.placeholder = "Enter name to search";
            searchField.removeAttribute("oninput");
            searchField.value = "";
            break;

        case "address":
            searchField.placeholder = "Enter address to search";
            searchField.removeAttribute("oninput");
            searchField.value = "";
            break;

        case "salary":
            searchField.placeholder = "Enter salary to search";
            searchField.setAttribute("oninput", "this.value = this.value.replace(/\\D/g, '')");
            searchField.value = "";
            break;

        case "id":
            searchField.placeholder = "Enter ID to search";
            searchField.setAttribute("oninput", "this.value = this.value.replace(/\\D/g, '')");
            searchField.value = "";
            break;
    }
});

function searchCustomer() {
    event.preventDefault();
    let searchBy = document.getElementById("searchBy").value;
    let searchParameter = document.getElementById("searchField").value;
    let url;

    switch (searchBy) {
        case "name":
            url = `http://localhost:8080/customer/search-by-name/${searchParameter}`;
            break;

        case "address":
            url = `http://localhost:8080/customer/search-by-address/${searchParameter}`;
            break;

        case "salary":
            url = `http://localhost:8080/customer/search-by-salary/${searchParameter}`;
            break;

        case "id":
            url = `http://localhost:8080/customer/search-by-id/${searchParameter}`;
            break;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Wrap data into a array when customer object returned(when search by id)
            if (!Array.isArray(data)) {
                data = [data];
            }

            if(data.length!=0){
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
            } else {
                alert("No Customer(s) Found");
                searchField.value = "";
            }

            

        })
}