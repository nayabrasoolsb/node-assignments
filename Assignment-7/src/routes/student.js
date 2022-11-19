const router = require('express').Router();
const bodyParser = require('body-parser');
const studentArray = require('../InitialData')

router.use(bodyParser.json())
let id = 7;


router.get("/api/students", async (req, res) => {
    try {

        res.status(200).json({
            status: "success",
            data: studentArray
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            messege: error.messege
        })
    }
})
router.get("/api/students/:id", async (req, res) => {
    // console.log(req.params)
    try {
        let student = studentArray.find(x => x.id == req.params.id);
        console.log(student)
        res.status(200).json({
            status: "success",
            data: student
        })
    } catch (error) {
        res.status(404).json({
            status: "id is invalid",
            messege: error.messege
        })
    }
})
router.post("/api/students", async (req, res) => {
    // console.log(req.body)
    try {
        id++;
        res.set({ 'content-type': 'application/x-www-form-urlencoded' })
        let student = studentArray.push({ ...req.body, id });
        // console.log(student)
        res.status(200).json({
            status: "success",
            data: studentArray[studentArray.length-1]
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            messege: error
        })
    }
})
router.put("/api/students/:id", async (req, res) => {
    // console.log(req.body)
    // console.log(req.params)
    try {
        res.set({ 'content-type': 'application/x-www-form-urlencoded' })

        let student = studentArray.findIndex(({ id }) => id == req.params.id);
        // console.log(student)
        studentArray[student] = { ...studentArray[student], ...req.body }
        res.status(200).json({
            status: "success",
            data: studentArray[student]
        })
    } catch (error) {
        res.status(400).json({
            status: "invalid id is given",
            messege: error.messege
        })
    }
})
router.delete("/api/students/:id", async (req, res) => {
    // console.log(req.params.id)
    try {
        let studentIndex = studentArray.findIndex(x => x.id == req.params.id);
        let student = studentArray.splice(studentIndex, 1);
        res.status(200).json({
            status: "success",
            data: student
        })
    } catch (error) {
        res.status(404).json({
            status: "invalid id is given",
            messege: error.messege
        })
    }
})
router.get("*", async (req, res) => {
    res.status(404).json({
        status: "invalid id is given",
        messege: error.messege
    })
})


module.exports = router;
