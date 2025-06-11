import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-profil-emetteur',
  templateUrl: './profil-emetteur.component.html',
  styleUrls: ['./profil-emetteur.component.scss']
})
export class ProfilEmetteurComponent implements OnInit {
  profileForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    const userData = this.authService.getUser();
    if (!userData || !userData.user) {
      // Optionally redirect or show an error
      this.toast.error('Utilisateur non trouvé. Veuillez vous reconnecter.', 'Erreur');
      return;
    }
    const user = userData.user;
    this.userId = user._id;
    this.profileForm = this.fb.group({
      name: [user.name, Validators.required],
      firstName: [user.prenom, Validators.required],
      email: [user.email, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.profileForm.invalid) return;
    const { name, firstName, email, password } = this.profileForm.value;
    const updatedUser = { name, firstName, email, password };
    this.authService.updateUser(this.userId, updatedUser).subscribe({
      next: (data) => {
        this.toast.success('Profile updated successfully', 'Success');
        this.authService.save_user(data);
        this.profileForm.reset();
      },
      error: (err) => {
        this.toast.error('Error updating profile', 'Error');
      }
    });
  }
}