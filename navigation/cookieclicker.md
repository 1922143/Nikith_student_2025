---
layout: page
title: Sprint 5 Reflection
permalink: /sprint5/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sprint 5 Reflection</title>
    <style>
        .banner {
            background: linear-gradient(90deg, #0077b6, #00ff99); /* Blue to Green gradient */
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            width: 80%;
            margin: 20px auto;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
        .banner h1 {
            color: #ffffff; /* White text */
            margin: 0;
            font-size: 3em; /* Bigger text */
            font-family: Arial, sans-serif;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .banner p {
            color: #ffffff; /* White text */
            font-size: 1.2em; /* Smaller text */
            margin: 5px 0 0;
            font-family: Arial, sans-serif;
            opacity: 0.9; /* Slight transparency for effect */
        }
    </style>
</head>
<body>

    <div class="banner">
        <h1>Sprint 5 Reflection</h1>
        <p>Welcome to Striver</p>
    </div>

</body>

# What is Striverr?
A website where a user can share their achievments and challenges with many people. They can also share their hobbies, generate and share quotes, and create a list of bucket list items for the future. There is also a step tracker to track fitness goals.


# My Feature
My feature is a bucket list. It allows for users to keep track of their bucket list and new achievements that they want to accomplish. They can create, read, update, and delete bucket list items to their liking.

## Backend Implementation
The backend is implemented using **Flask** and **SQLAlchemy** for database operations. The API follows REST principles, using standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).

### `BucketList` Model
The `BucketList` model represents each bucket list item. It includes fields for an **ID**, **title**, **description**, **category**, and **user ID**. Below is the implementation:

```python
from __init__ import db, app

class BucketList(db.Model):
    __tablename__ = 'bucketlists'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(50), nullable=False, default="Pending")
    user = db.Column(db.Integer, nullable=False)

    def __init__(self, title, description, category, user):
        self.title = title
        self.description = description
        self.category = category
        self.user = user
```

#### Explanation:
- **`id`**: The primary key for uniquely identifying a bucket list item.
- **`title`**: A short title for the bucket list item (e.g., "Skydiving").
- **`description`**: A brief description of the goal.
- **`category`**: The category (e.g., "Adventure", "Personal").
- **`user`**: The ID of the user who owns this item.

---

## CRUD Operations
The API supports **Create, Read, Update, and Delete (CRUD)** operations.

### Fetching Bucket List Items (`GET`)
```python
```python
def get(self):
    bucket_id = request.args.get('id')

    if bucket_id:
        bucketlist = BucketList.query.get(bucket_id)
        if not bucketlist:
            return {'message': 'Bucket list not found'}, 404
        return jsonify(bucketlist.read())

    all_bucketlists = BucketList.query.all()
    return jsonify([bucketlist.read() for bucketlist in all_bucketlists])
```
```

#### Explanation:
- If an **ID is provided**, it fetches a single bucket list item.
- If **no ID is provided**, it returns all bucket list items.
- Uses `query.get()` to fetch by ID and `query.all()` to retrieve all items.

---

### Creating a New Bucket List Item (`POST`)
```python
```python
def post(self):
    data = request.get_json()
    
    bucketlist = BucketList(
        title=data.get('title'),
        description=data.get('description'),
        category=data.get('category'),
        user=1,
    )
    
    try:
        bucketlist.create()
        return jsonify(bucketlist.read())
    except Exception as e:
        return {'message': f'Error saving bucketlist: {e}'}, 500
```
```

#### Explanation:
- Extracts **title, description, category** from the request.
- Creates a new bucket list item and stores it in the database.
- Returns the newly created item in JSON format.

---

### Updating a Bucket List Item (`PUT`)
```python
```python
def put(self):
    current_user = g.current_user
    if not current_user:
        return jsonify({"message": "Unauthorized: User not found"}), 401

    data = request.get_json()
    if not data or not data.get('id'):
        return jsonify({"message": "ID is required"}), 400

    bucket_list_item = BucketList.query.filter_by(id=data['id'], user=current_user.id).first()
    if bucket_list_item:
        bucket_list_item.update(
            title=data.get('title'),
            description=data.get('description'),
            category=data.get('category')
        )
        return jsonify(bucket_list_item.read())
    return jsonify({'message': 'Item not found or unauthorized'}), 404
```
```

#### Explanation:
- Ensures the user is **authenticated** before updating.
- Finds the item by **ID** and **user ID**.
- Updates the **title, description, and category** fields and returns the updated item.

---

### Deleting a Bucket List Item (`DELETE`)
```python
```python
def delete(self):
    current_user = g.current_user
    if not current_user:
        return jsonify({"message": "Unauthorized: User not found"}), 401

    data = request.get_json()
    if not data or not data.get('id'):
        return jsonify({"message": "ID is required"}), 400

    bucket_list_item = BucketList.query.filter_by(id=data['id'], user=current_user.id).first()
    if bucket_list_item:
        bucket_list_item.delete()
        return jsonify({'message': 'Item deleted successfully'})
    return jsonify({'message': 'Item not found or unauthorized'}), 404
```
```

#### Explanation:
- Ensures only **authenticated users** can delete their items.
- Deletes the bucket list item from the database.

---

## Frontend Integration
The frontend interacts with the API using **JavaScript (Fetch API)**.

### Fetching Bucket List Items
```javascript
async function fetchBucketList() {
    try {
        const response = await fetch('http://127.0.0.1:8887/api/bucketlist');
        if (!response.ok) {
            throw new Error('Failed to fetch bucket list: ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching bucket list:', error);
    }
}
```

#### Explanation:
- Sends a `GET` request to fetch all bucket list items.
- Logs the response in the console.

---

### Adding a New Item
```javascript
async function addBucketListItem() {
    const item = document.getElementById('new-bucket-item').value;
    const desc = document.getElementById('new-bucket-desc').value;
    const category = document.getElementById('new-bucket-category').value;

    const postData = {
        title: item,
        description: desc,
        category: category,
    };
    try {
        const response = await fetch(`http://127.0.0.1:8887/api/bucketlist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error('Failed to add bucket list item');
        }
        alert('Bucket list item added successfully!');
        fetchBucketList();
    } catch (error) {
        console.error('Error adding bucket list item:', error);
    }
}
```

---

## Conclusion
This Bucket List API provides full CRUD operations, enabling users to create and manage personal goals. It is implemented with Flask and SQLAlchemy for the backend and JavaScript Fetch API for the frontend.


