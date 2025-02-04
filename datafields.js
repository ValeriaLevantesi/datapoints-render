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
    const parentContainer = container.parentElement;

    if (datapointId === 'pitch_deck') {
        parentContainer.className = 'flat-datafields';
    } else if (datapointId === 'team') {
    }

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
        <img src="${field.value === true ? 'assets/check.png' : field.value === false ? 'assets/close.png' : 'assets/presentation.png'}" alt="${field.value === true ? 'Check Icon' : field.value === false ? 'Close Icon' : 'Presentation Icon'}" class="icon">
        <h3 class="primary-text">${formattedId}</h3>
    </div>
    <div class="field-value">
        <span class="secondary-text">
            ${field.value === true ? 'true' : field.value === false ? 'false' : field.value}
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
            const memberElement = document.createElement('ul');
            memberElement.className = 'team-member';

            // Create list items for each field, including the index_key
            const fields = [{ id: 'index_key', value: member.index_key }, ...member.fields];

            // Sort fields to ensure the string field is at the top, but keep index_key at the top
            const sortedFields = fields.filter(field => field.id !== 'index_key').sort((a, b) => {
                if (typeof a.value === 'string') return -1;
                if (typeof b.value === 'string') return 1;
                return 0;
            });

            // Add index_key back to the top
            const indexKeyField = fields.find(field => field.id === 'index_key');
            if (indexKeyField) {
                sortedFields.unshift(indexKeyField);
            }

            sortedFields.forEach(field => {
                // Format the field ID
                const formattedId = field.id
                    .replace(/_/g, ' ')
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                const fieldItem = document.createElement('li');
                fieldItem.className = field.id === 'index_key' ? 'member-name' : 'field-item';
                fieldItem.innerHTML = field.id === 'index_key' ? `
                    <span class="team-member-name">
                        ${field.value}
                    </span>
                ` : `
                    <div class="field-header">
                        <img src="assets/presentation.png" alt="Icon" class="icon">
                        <span class="field-label">${formattedId}</span><br>
                    </div>
                    <div class="field-value">
                        ${field.value === true ? 'true' : field.value === false ? 'false' : field.value}
                    </div>
                `;
                memberElement.appendChild(fieldItem);
            });

            container.appendChild(memberElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadDatafields);
