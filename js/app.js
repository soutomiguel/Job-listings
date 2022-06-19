class JobPost{
    constructor(
        company, 
        logo, 
        newPost, 
        position,
        role,
        level,
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
        this._contract = contract
        this._locationJob = locationJob
        this._languages = languages
        this._tools = tools
    }

    postedAt(){
        const date = new Date().getDate()
        return date
    }
}

let display = document.getElementById('display')
let submitJobBtn = document.getElementById("submitJobBtn")

submitJobBtn.addEventListener("click", () => {
    let company = document.getElementById('company').value
    let logo = document.getElementById('logo').value
    let newPost = document.getElementById('newPost').value
    let position = document.getElementById('position').value
    let role = document.getElementById('role').value
    let level = document.getElementById('level').value
    let contract = document.getElementById('contract').value
    let locationJob = document.getElementById('locationJob').value
    let languages = document.getElementById('languages').value
    let tools = document.getElementById('tools').value

    const post = new JobPost(
        company, 
        logo, 
        newPost, 
        position,
        role,
        position,
        level,
        contract,
        locationJob,
        languages,
        tools
        )

    let jobData = document.createElement('div')
    jobData.innerHTML = `
        <p>${post._company}</p>
        <p>${post._role}</>
        <p>${post._contract}</>
        <p>${post._locationJob}</>
        <p>${post.postedAt()}</>
    `
    display.append(jobData)
})