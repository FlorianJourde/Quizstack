export const container = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

export const item = {
    visible: {
        opacity: 1,
        y: 0,
    },
    hidden: {
        opacity: 0,
        y: 10,
    },
}
