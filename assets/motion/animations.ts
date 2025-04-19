export const container = {
    hidden: {
        opacity: 0,
        y: 10,
        // transition: {
        //     type: "spring",
        //     stiffness: 100,
        //     duration: 1,
        // }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            // type: "spring",
            // stiffness: 100,
            // duration: 1,
        }
    }
}

export const item = {
    visible: {
        opacity: 1,
        y: 0,
        // transition: {
        //     type: "spring",
        //     stiffness: 100,
        //     duration: 1,
        // }
    },
    hidden: {
        opacity: 0,
        y: 10,
        // transition: {
        //     type: "spring",
        //     stiffness: 100,
        //     duration: 1,
        // }
    },
}
