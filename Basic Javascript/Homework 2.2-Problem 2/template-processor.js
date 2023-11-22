// template-processor.js

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        // Regular expression to match placeholders in the template
        const regex = /{{(.*?)}}/g;

        // Replace placeholders in the template with dictionary values
        const filledTemplate = this.template.replace(regex, (match, propertyName) => {
            // Trim property name to handle extra whitespaces
            const trimmedPropertyName = propertyName.trim();

            // Check if the property exists in the dictionary
            if (dictionary.hasOwnProperty(trimmedPropertyName)) {
                // Replace the placeholder with the dictionary value
                return dictionary[trimmedPropertyName];
            } else {
                // If the property doesn't exist, replace it with an empty string
                return '';
            }
        });

        // Use a regular expression to remove extra whitespaces
        const cleanedTemplate = filledTemplate.replace(/\s+/g, ' ');

        return cleanedTemplate;
    }
}

// Example usage:

var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);

console.log('Result:', str);
console.assert(str === 'My favorite month is July but not the day 1 or the year 2016');

// Case: property doesn't exist in dictionary
var dictionary2 = { day: '1', year: '2016' };
var str2 = dateTemplate.fillIn(dictionary2);

console.log('Result2:', str2);
console.assert(str2 === 'My favorite month is but not the day 1 or the year 2016');
