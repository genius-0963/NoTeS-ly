export const addFirstName = (data) => {
    return {
        type: "ADD FIRST NAME",
        payload: data
    }
} 

export const addLastName = (data) => {
    return {
        type: "ADD LAST NAME",
        payload: data
    }
}

export const addInstitute = (data) => {
    return {
        type: "ADD INSTITUTE",
        payload: data
    }
}

export const addBranch = (data) => {
  return {
    type: "ADD BRANCH",
    payload: data
  }
}

export const addPhoto = (data) => {
    return {
      type: "ADD PHOTO",
      payload: data,
    };
};