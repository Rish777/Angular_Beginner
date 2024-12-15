import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Category {
  name: string;
  images?: string[];        // Optional: Array of images for categories with multiple images
  image: string;            // Current displayed image
  originalImage: string;    // Initial image to reset when mouse leaves
  shuffleInterval?: any;    // Track the shuffle interval to stop on mouse leave
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  username: string = 'User'; // This can be replaced with a dynamic username from a service
  categories: Category[] = [
    { name: 'Dogs', images: [
      // 'assets/images/Dogs1.jpg',
      // 'assets/images/Dogs2.jpg',
      // 'assets/images/Dogs3.jpg',
      // 'assets/images/Dogs4.jpg',
      // 'assets/images/Dogs5.jpg'
    ],
    image: 'assets/images/Dogs6.jpg', // Initial image
    originalImage: 'assets/images/Dogs6.jpg' // Store the original image
    },
    { name: 'Food', images: [
      // 'assets/images/Foods1.jpg',
      // 'assets/images/Foods2.jpg',
      // 'assets/images/Foods3.jpg',
      // 'assets/images/Foods4.jpg',
      // 'assets/images/Foods5.jpg'
    ],
    image: 'assets/images/Foods1.jpg', // Initial image
    originalImage: 'assets/images/Foods1.jpg' // Store the original image
    },
    { name: 'Medicine', images: [
      // 'assets/images/Foods1.jpg',
      // 'assets/images/Foods2.jpg',
      // 'assets/images/Foods3.jpg',
      // 'assets/images/Foods4.jpg',
      // 'assets/images/Foods5.jpg'
    ],
    image: 'assets/images/Med1.jpg', // Initial image
    originalImage: 'assets/images/Med1.jpg' // Store the original image
    },
    // Other categories go here
  ];

  constructor(private router: Router) {}

  // Method to shuffle images on hover
  shuffleImages(category: Category) {
  if (category.images && category.images.length > 0) { // Ensure images are defined and not empty
    const randomImage = this.getRandomImage(category.images);
    category.image = randomImage;
  }
}

  // Reset the image to its original one when mouse leaves
  resetImage(category: Category) {
    clearInterval(category.shuffleInterval); // Stop the shuffle when mouse leaves
    category.image = category.originalImage; // Restore the original image
  }

  // Randomly select an image from the provided set of images
  getRandomImage(images: string[]): string {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  // Method to control the number of columns based on screen width
  getCols() {
    const width = window.innerWidth;
    if (width < 600) {
      return 2; // 2 columns on small screens
    } else if (width < 900) {
      return 3; // 3 columns on medium screens
    } else {
      return 3; // 4 columns on larger screens
    }
  }

  // Handle category click (e.g., navigate to a category's page)
  onCategoryClick(category: Category) {
    console.log('Category clicked:', category.name);
    // Perform actions like navigation or showing details
  }

  // Navigate to Dashboard
  goToDashboard(): void {
    console.log('Navigating to Dashboard...');
    this.router.navigate(['/dashboard']); // Navigate to the dashboard route
  }

  // Logout method
  logout(): void {
    // Redirect to the login page on logout
    this.router.navigate(['/']);
  }
}
