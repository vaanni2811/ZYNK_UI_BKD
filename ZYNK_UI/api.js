/**
 * InternFlow API Service Layer
 * 
 * All API calls are centralized here
 */

const API = {
    // Base URL from config
    baseURL: AppConfig.API_BASE_URL,
    
    // ============ Helper Methods ============
    async request(method, endpoint, data = null, customHeaders = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            ...AppHelpers.getAuthHeader(),
            ...customHeaders,
        };
        
        const config = {
            method,
            headers,
        };
        
        if (data && (method === 'POST' || method === 'PUT' || method === 'DELETE')) {
            config.body = JSON.stringify(data);
        }
        
        try {
            const response = await fetch(url, config);
            
            // Handle non-JSON responses
            const contentType = response.headers.get('content-type');
            let responseData;
            
            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }
            
            if (!response.ok) {
                throw {
                    response: {
                        status: response.status,
                        data: responseData,
                    }
                };
            }
            
            return responseData;
        } catch (error) {
            AppHelpers.handleApiError(error);
            throw error;
        }
    },
    
    get(endpoint) {
        return this.request('GET', endpoint);
    },
    
    post(endpoint, data) {
        return this.request('POST', endpoint, data);
    },
    
    put(endpoint, data) {
        return this.request('PUT', endpoint, data);
    },
    
    delete(endpoint, data = null) {
        return this.request('DELETE', endpoint, data);
    },
    
    // ============ Authentication APIs ============
    auth: {
        loginHR(email, password) {
            return API.post('/auth/login/hr', { email, password });
        },
        
        loginIntern(email, password) {
            return API.post('/auth/login/intern', { email, password });
        },
    },
    
    // ============ Intern APIs ============
    interns: {
        onboard(data) {
            return API.post('/interns/onboard', data);
        },
        
        getMyDetails() {
            return API.get('/interns/my-details');
        },
        
        updateMyDetails(data) {
            return API.put('/interns/my-details', data);
        },
        
        updateIntern(internId, data) {
            return API.put(`/interns/${internId}`, data);
        },
        
        getAll() {
            return API.get('/interns/all');
        },
    },
    
    // ============ Invoice APIs ============
    invoices: {
        generate(month, year) {
            return API.post('/invoices/generate', { month, year });
        },
        
        getMyInvoices() {
            return API.get('/invoices/my-invoices');
        },
        
        getAll() {
            return API.get('/invoices/all');
        },
        
        getById(invoiceId) {
            return API.get(`/invoices/${invoiceId}`);
        },
        
        getHtml(invoiceId) {
            return API.get(`/invoices/${invoiceId}/html`);
        },
        
        updateStatus(invoiceId, status, remarks = '') {
            return API.put(`/invoices/${invoiceId}/status?status=${status}&remarks=${encodeURIComponent(remarks)}`);
        },
    },
    
    // ============ Leave APIs ============
    leaves: {
        request(leaveDate, reason) {
            return API.post('/leaves/request', { leaveDate, reason });
        },
        
        getMyLeaves() {
            return API.get('/leaves/my-leaves');
        },
        
        getBalance() {
            return API.get('/leaves/balance');
        },
        
        getPending() {
            return API.get('/leaves/pending');
        },
        
        getTotal() {
            return API.get('/leaves/total');
        },
        
        getApproved() {
            return API.get('/leaves/approved');
        },
        
        getRejected() {
            return API.get('/leaves/rejected');
        },
        
        getPaid() {
            return API.get('/leaves/paid');
        },
        
        getUnpaid() {
            return API.get('/leaves/unpaid');
        },
        
        approve(leaveId, approvedBy) {
            return API.put(`/leaves/${leaveId}/approve?approvedBy=${encodeURIComponent(approvedBy)}`);
        },
        
        reject(leaveId) {
            return API.put(`/leaves/${leaveId}/reject`);
        },
    },
    
    // ============ Announcement APIs ============
    announcements: {
        create(title, body, expiryDate) {
            return API.post('/announcements', { title, body, expiryDate });
        },
        
        getActive() {
            return API.get('/announcements/active');
        },
        
        getAll() {
            return API.get('/announcements/all');
        },
        
        deactivate(announcementId) {
            return API.put(`/announcements/${announcementId}/deactivate`);
        },
    },
    
    // ============ Training APIs ============
    trainings: {
        create(data) {
            return API.post('/trainings', data);
        },
        
        getAll() {
            return API.get('/trainings/all');
        },
        
        getById(trainingId) {
            return API.get(`/trainings/${trainingId}`);
        },
        
        update(trainingId, data) {
            return API.put(`/trainings/${trainingId}`, data);
        },
        
        delete(trainingId) {
            return API.delete(`/trainings/${trainingId}`);
        },
        
        assign(trainingId, internId) {
            return API.post('/trainings/assign', { trainingId, internId });
        },
        
        bulkAssign(trainingId, internIds) {
            return API.post('/trainings/assign/bulk', { trainingId, internIds });
        },
        
        getAllAssignments() {
            return API.get('/trainings/assignments/all');
        },
        
        getMyAssignments() {
            return API.get('/trainings/my-assignments');
        },
        
        unassign(trainingId, internId) {
            return API.delete('/trainings/assign', { trainingId, internId });
        },
    },
    
    // ============ Separation APIs ============
    separations: {
        request(requestedSeparationDate, reason) {
            return API.post('/separations/request', { requestedSeparationDate, reason });
        },
        
        getMyRequests() {
            return API.get('/separations/my-requests');
        },
        
        getAll() {
            return API.get('/separations/all');
        },
        
        getPending() {
            return API.get('/separations/pending');
        },
        
        approve(requestId, approvedBy) {
            return API.put(`/separations/${requestId}/approve?approvedBy=${encodeURIComponent(approvedBy)}`);
        },
        
        reject(requestId, approvedBy = '', hrRemarks = '') {
            let url = `/separations/${requestId}/reject?`;
            if (approvedBy) url += `approvedBy=${encodeURIComponent(approvedBy)}&`;
            if (hrRemarks) url += `hrRemarks=${encodeURIComponent(hrRemarks)}`;
            return API.put(url);
        },
    },
    
    // ============ AI APIs ============
    ai: {
        policyBuddy(question) {
            return API.post('/ai/policy-buddy', { question });
        },
        
        hrSummary(month, year) {
            return API.get(`/ai/hr-summary?month=${month}&year=${year}`);
        },
    },
    
    // ============ Test/Health APIs ============
    test: {
        hello() {
            return API.get('/hello');
        },
        
        health() {
            return API.get('/health');
        },
    },
};

// Make API globally available
window.API = API;

