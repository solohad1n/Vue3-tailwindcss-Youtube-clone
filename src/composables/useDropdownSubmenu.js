const selectedOption = (option, optionName, emit) => {
  emit('selectOption', {
    name: optionName,
    val: option
  })
}

const useDropdownSubmenu = () => {
  return { selectedOption }
}

export default useDropdownSubmenu