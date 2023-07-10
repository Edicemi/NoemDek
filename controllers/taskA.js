const Schedule = require('../models/schedule');
const Error = require('../lib/customError');
const path = require('path');

exports.addSchedule = async(req, res, next) => {
    const { vehicleType, vehicleStatus, driverName, clientName, clientCompany, service, startDate, endDate, pickUp, dropOff, note} = req.body;
    try {
        if (vehicleType && vehicleStatus && driverName && clientName && clientCompany && service && startDate && endDate && pickUp && dropOff && note) {
            const schedule = new Schedule({
                vehicleType: vehicleType,
                vehicleStatus: vehicleStatus,
                driverName: driverName,
                clientName: clientName,
                clientCompany: clientCompany,
                service: service,
                startDate: startDate,
                endDate: endDate,
                pickUp: pickUp,
                dropOff: dropOff,
                note: note
            })
            await schedule.save();
            return res.status(200).json({
                message: 'Schedule added successfully',
            })
        } else {
            throw new Error('Invalid parameters provided', 'MISSING ARGUMENTS', 401)
        }
    } catch (error) {
        next(error);
    }
}

exports.getSchedule = async (req, res, next) => {
    try {
        const { scheduleId } = req.params;
        const schedule = await Schedule.findById(scheduleId )
        .select("vehicleType")
        .select("vehicleStatus")
        .select("driverName")
        .select("clientName")
        .select("clientCompany")
        .select("service")
        .select("startDate")
        .select("endDate")
        .select("pickUp")
        .select("dropOff")
        .select("note")
        return res.status(200).json({
                status: "success",
                message: 'Schedule Info fetched succesfully',
                schedule,
            });
        } catch (error) {
        next(error);
    }
};
