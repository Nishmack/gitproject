localStorage.setItem('name','bob')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')



sessionStorage.setItem('name','jhon')
console.log(sessionStorage.getItem('name'))
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.setItem('name','bob')



document.cookie = 'name=kyli; expires = ' + new Date(999,0,1).toUTCString()
document.cookie = 'lastName=kyli; expires = ' + new Date(9999,0,1).toUTCString()
console.log(document.cookie)