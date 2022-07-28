# EMP Master README

## `Overview:`

---

This app is a tool for exploring the exhibits and artworks hosted at the Art Institute of Chicago. Users can learn about the artists, the time periods, and the pieces themselves. Users can also leave comments with their thoughts on the work, as well as their experiences upon visiting a piece.

Our goal is to share historical artwork with anyone who may not have access to visit a museum and experience these pieces themselves. We want to encourage all visitors (both in-person and virtual) to share and express their thoughts and emotions evoked by each piece, and host a platform for conversation around the respective artwork.

---

## `API Source & Endpoint:`

---

Source: [The Art Institute of Chicago Public API](https://www.artic.edu/open-access/public-api)

Endpoint: https://api.artic.edu/api/v1/artworks

---

## `Schemas:`

---

### User:

```javascript
  {
    email : String,
    fullName: String,
    userName: String,
    password_digest: String
  }
```

### Picture:

```javascript
  {
    artist: String,
    title: String,
    imageId: String,
    year: Number,
    tags: [String],
    comments: [comments]
  },

    { timestamp: true }
```

### Comment:

```javascript
  {
    owner: {userObject}
    text: String
  },

    { timestamp: true }
```

---

## `Important Links`

- ### [EMP Team Expectations Google Doc](https://docs.google.com/document/d/1bGwMuPmrwVGNWlPxbOGGk54fBWZk22zdcrrTcyDf9JA/edit)
- ### [Whimsical Flowchart](https://whimsical.com/emp-project-8-virtual-art-institute-of-chicago-XUUhQQoKXsa77UkSPqMy4F)
- ### [GitHub Project Board](https://github.com/mraznick/emp-back-end/projects?type=new)

---
