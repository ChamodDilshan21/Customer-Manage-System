function deletePopUp() {
    event.preventDefault();
    let id = document.getElementById("txtId").value;
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#0d6efd",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            const requestOptions = {
                method: "DELETE",
                redirect: "follow"
            };

            fetch(`http://localhost:8080/customer/delete/${id}`, requestOptions)
                .then(res => res.json())
                .then(data=>{
                    if(data){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Customer has been deleted.",
                            icon: "success"
                        });
                    }else{
                        Swal.fire({
                            title: "Failed!",
                            text: "Customer has not been deleted.",
                            icon: "error"
                        });
                    }
                    
                })
                .catch((error) => console.error(error));
        }
    });
}


