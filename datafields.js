function loadDatafields() {
    const urlParams = new URLSearchParams(window.location.search);
    const candidateId = urlParams.get('id');
    const datapointId = urlParams.get('datapoint');
    const backButton = document.querySelector('.back-button');
    backButton.href = `datapoints.html?id=${candidateId}&datapoint=${datapointId}`;

    if (!candidateId || !datapointId || !candidatesData[candidateId]) {
        window.location.href = 'index.html';
        return;
    }

    const candidate = candidatesData[candidateId];
    const datapointData = candidate.datapoints[datapointId];

    // Set datapoint name
    document.getElementById('datapointName').textContent =
        datapointId.replace('_', ' ').charAt(0).toUpperCase() + datapointId.slice(1);

    // Display datafields
    const container = document.getElementById('datafieldsContainer');

    if (datapointId === 'pitch_deck') {
        // Handle flat datapoint (pitch deck)
        const fields = datapointData.fields.map(field => {
            const fieldElement = document.createElement('div');
            fieldElement.className = 'datafield-item';

            // Format the field ID for better readability
            const formattedId = field.id
                .replace('content-', '')
                .replace('slide-', '')
                .replace('meta-', '')
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            fieldElement.innerHTML = `
                <div class="field-header">
                    <h3>${formattedId}</h3>
                    <span class="field-value ${field.value ? 'positive' : 'negative'}">
                        ${field.value === true ? '✓' : field.value === false ? '✗' : field.value}
                    </span>
                </div>
            `;
            return { element: fieldElement, isString: typeof field.value === 'string' };
        });

        // Sort fields to ensure the string field is at the top
        fields.sort((a, b) => {
            if (a.isString && typeof a.element.textContent === 'string') return -1;
            if (b.isString && typeof b.element.textContent === 'string') return 1;
            return b.isString - a.isString;
        });

        // Append fields to the container
        fields.forEach(({ element }) => container.appendChild(element));
    } else if (datapointId === 'team') {
        // Handle iterable datapoint (team)
        datapointData.elements.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'team-member';

            // Format the member name
            const memberName = member.index_key
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            const fieldsHTML = member.fields
                .map(field => {
                    // Skip role field as it's already in the header
                    if (field.id === 'role') {
                        return '';
                    }

                    // Format the field ID
                    const formattedId = field.id
                        .replace(/_/g, ' ')
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    return `
                        <div class="field-item">
                            <span class="field-label">${formattedId}:</span>
                            <span class="field-value ${field.value ? 'positive' : 'negative'}">
                                ${field.value === true ? '✓' : field.value === false ? '✗' : field.value}
                            </span>
                        </div>
                    `;
                })
                .join('');

            // Get the role field
            const roleField = member.fields.find(f => f.id === 'role');

            memberElement.innerHTML = `
                <div class="member-header">
                    <h3>${memberName}</h3>
                    <span class="member-role">${roleField ? roleField.value : ''}</span>
                </div>
                <div class="member-fields">
                    ${fieldsHTML}
                </div>
            `;
            container.appendChild(memberElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadDatafields);
