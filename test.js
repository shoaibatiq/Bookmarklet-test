(() => {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let texts = document.querySelectorAll("input[type='text']")
    for(let el of checkboxes) el.click()	
    for(let el of texts) el.value="Hello World"
})()