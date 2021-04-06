import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOneHour = now.clone().add(1, 'hours');

export const CalendarModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlusOneHour.toDate());
    const [titleValid, setTitleValid] = useState(true);
    const [formValues, setFormValues] = useState({
        title: 'Event',
        notes: '',
        start: now.toDate(),
        end: nowPlusOneHour.toDate()
    });

    const {notes, title, start, end} = formValues;

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        //TODO: close modal
    }

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    const handleEndtDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    const handleSubmitForm = (e) => {
        debugger;
        e.preventDefault();
        
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error', 'End date must be after Start date', 'error');
        }

        if (title.trim().length < 2) {
            setTitleValid(false);
        }

        //TODO: send to backend
        setTitleValid(true);
        closeModal();
    }

    return (
        <Modal
            isOpen={true}
            //   onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-background"
        >
            <h1>New Event</h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >
                <div className="form-group">
                    <label>Start date</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart ? dateStart : null}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>End date</label>
                    <DateTimePicker
                        onChange={handleEndtDateChange}
                        minDate={dateStart}
                        value={dateEnd ? dateEnd : null}
                        className="form-control"
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label>Title and Notes</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Event title"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">A short description</small>
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Other information</small>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>

            </form>
        </Modal>
    );
}
