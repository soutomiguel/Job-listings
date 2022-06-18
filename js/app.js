
class jobItem{
    constructor(
        company,
        logo,
        newPost,
        position,
        role,
        level,
        postedAt,
        contract,
        locationJob,
        languages,
        tools
    ){
        this._company = company
        this._logo = logo
        this._newPost = newPost
        this._position = position
        this._role = role
        this._level = level
        this._postedAt = postedAt
        this._contract = contract
        this._locationJob = locationJob
        this._languages = languages
        this._tools = tools
    }
}

let arrTest = []

let submitJobBtn = window.document.getElementById("submitJobBtn")

submitJobBtn = window.document.addEventListener("click", () => {
    let company =  window.document.getElementById('company').value
    let logo =  window.document.getElementById('logo').value
    let newPost =  window.document.getElementById('newPost').value
    let position =  window.document.getElementById('position').value
    let role =  window.document.getElementById('role').value
    let level =  window.document.getElementById('level').value
    let postedAt =  window.document.getElementById('postedAt').value
    let contract =  window.document.getElementById('contract').value
    let languages =  window.document.getElementById('languages').value
    let tools =  window.document.getElementById('tools').value

    arrTest.push(company)
    console.log(arrTest)

    const jobPost = new jobItem(company, logo, newPost, position, role, level, postedAt, contract, languages, tools)
})


