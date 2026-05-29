//Comenatario
console.log("Texto")
console.log("Este trechp sera exebido no consle do nabeadir")
confirm("Ols")

Swal.fire({
  title: 'Você tem certeza?',
  text: "Esta ação não poderá ser revertida!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Sim, deletar!',
  cancelButtonText: 'Não, cancelar!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Deletado!', 'O arquivo foi deletado.', 'success');
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire('Cancelado', 'A ação foi cancelada.', 'error');
  }
});
