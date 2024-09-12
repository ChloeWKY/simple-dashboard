from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class ChartAPITests(APITestCase):
    def test_get_candlestick_data(self):
        """
        Ensure the candlestick data API returns the correct data.
        """
        url = reverse('candlestick-data')
        response = self.client.get(url)

        # Assert the status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Assert the structure of the response data
        response_data = response.json()
        self.assertIn('data', response_data)
        self.assertEqual(len(response_data['data']), 2)

        # Check specific content of the response
        expected_first_entry = {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35}
        self.assertEqual(response_data['data'][0], expected_first_entry)

    def test_get_line_chart_data(self):
        """
        Ensure the line chart data API returns the correct data.
        """
        url = reverse('line-chart-data')
        response = self.client.get(url)

        # Assert the status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Assert the structure of the response data
        response_data = response.json()
        self.assertIn('labels', response_data)
        self.assertIn('data', response_data)

        # Check specific content of the response
        expected_labels = ["Jan", "Feb", "Mar", "Apr"]
        expected_data = [10, 20, 30, 40]
        self.assertEqual(response_data['labels'], expected_labels)
        self.assertEqual(response_data['data'], expected_data)

    def test_get_bar_chart_data(self):
        """
        Ensure the bar chart data API returns the correct data.
        """
        url = reverse('bar-chart-data')
        response = self.client.get(url)

        # Assert the status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Assert the structure of the response data
        response_data = response.json()
        self.assertIn('labels', response_data)
        self.assertIn('data', response_data)

        # Check specific content of the response
        expected_labels = ["Product A", "Product B", "Product C"]
        expected_data = [100, 150, 200]
        self.assertEqual(response_data['labels'], expected_labels)
        self.assertEqual(response_data['data'], expected_data)

    def test_get_pie_chart_data(self):
        """
        Ensure the pie chart data API returns the correct data.
        """
        url = reverse('pie-chart-data')
        response = self.client.get(url)

        # Assert the status code is 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Assert the structure of the response data
        response_data = response.json()
        self.assertIn('labels', response_data)
        self.assertIn('data', response_data)

        # Check specific content of the response
        expected_labels = ["Red", "Blue", "Yellow"]
        expected_data = [300, 50, 100]
        self.assertEqual(response_data['labels'], expected_labels)
        self.assertEqual(response_data['data'], expected_data)