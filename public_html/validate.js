            
$(document).ready(function() {
    $('#contactForm').bootstrapValidator({
        container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },

            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },

            contactNumber: {
                validators: {
                    notEmpty: {
                        message: 'The contact number is required and cannot be empty'
                    },

                    stringLength: {
                        max: 9,
                        min:9,
                        message: 'The contact number must be 9 characters long'
                    }
                }
            },


            address: {
                validators: {
                    notEmpty: {
                        message: 'The address is required and cannot be empty'
                    },
                    stringLength: {
                        max: 100,
                        message: 'The address must be less than 100 characters long'
                    }
                }
            },
            dateOfBirth: {
                validators: {
                    notEmpty: {
                        message: 'The date of birth is required and cannot be empty'
                    }

                }
            }
        }
    });
});
