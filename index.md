# Tabbik API Documentation

## Base

Currently, server can be started only on localhost. Therefore, the base url for the API is `http://localhost:3000/`.

Use `api/v1` for your requests.

## Authentication setup

Pass **Bearer Token** in authorization headers.

Example

```dart
import 'package:http/http.dart' as http;

void fetchData() async {
  final response = await http.get(
    Uri.parse('http://localhost:3000/api/v1/tournaments'),
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', # Pass your access token after authentication
      'Content-Type': 'application/json',
    },
  );

  if (response.statusCode == 200) {
    print('Success: ${response.body}');
  } else {
    print('Error: ${response.statusCode}');
  }
}

```
