# Design Notes

## Components

|-- Provider
    |-- Router
        |-- App [APP_LOAD ()]
            |-- Header
            |-- Home -> /
                |-- Banner
                |-- MainView
                    |-- YourFeedTab
                    |-- GlobalFeedTab
                    |-- TagFilterTab
                    |-- ArticleList
                        |-- ArticlePreview
                        |-- ListPagination
                |-- Tags
            |-- Login -> /login
            |-- Register -> /register
            |-- Article -> /article:id
                |-- ArticleMeta
                    |-- ArticleActions
                |-- CommentContainer
                    |-- CommentList
                        |-- Comment
                            |-- DeleteButton
                    |-- CommentInput
            |-- Settings -> /settings
                |-- SettingsForm
                |-- ListErrors
            |-- Profile -> /@:username
                |-- ArticleList
                |-- EditProfileSettings
                |-- FollowUserButton
            |-- ProfileFavorites -> /@:username/favorites

## State

|-- common
    |-- apploaded
    |-- appName
    |-- currentUser
    |-- redirectto
    |-- token
    |-- viewChangeCounter
|-- home
    |-- tags
|-- articlelist
    |-- articles
        |-- article
            |-- author
                |-- image
                |-- username
            |-- favorited
            |-- favoritesCount
            |-- comments
            |-- commentErrors
    |-- articlesCount
    |-- currentPage
    |-- pager
    |-- tab
    |-- tag
|-- auth
    |-- inProgress
    |-- errors
|-- settings
    |-- inProgress
    |-- errors
|-- profile
|-- editor
    |-- articleSlug
    |-- title
    |-- description
    |-- body
    |-- tagInput
    |-- tagList
    |-- inProgress
    |-- errors
