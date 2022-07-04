export class JobPost{
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
    ) {
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

    postedAt() {
        const date = new Date().getDate()
        return date
    }
}