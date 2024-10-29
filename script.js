function selectLocation(location) {  
  document.getElementById('selectedLocation').value = location;  
  document.getElementById('dropdownContent').style.display = 'none';  
}  

// Menutup dropdown jika klik di luar  
window.onclick = function(event) {  
  if (!event.target.matches('#selectedLocation')) {  
      document.getElementById('dropdownContent').style.display = 'none';  
  }  
}  

// Menampilkan dropdown saat input diklik  
document.getElementById('selectedLocation').onclick = function() {  
  const dropdownContent = document.getElementById('dropdownContent');  
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';  
}


/* Footer */
document.getElementById('submitBtn').addEventListener('click', function() {  
  const email = document.getElementById('email').value;  
  if (email) {  
      alert(`Email Anda: ${email} telah dikirim!`);  
      // Di sini Anda bisa menambahkan logika untuk mengirim email  
  } else {  
      alert('Silakan masukkan alamat email Anda.');  
  }  
});